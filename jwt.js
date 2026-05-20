const rawUrlEncode = (str) => btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        const rawUrlDecode = (str) => {
            let paddingRequirement = '='.repeat((4 - str.length % 4) % 4);
            let standardizedBase = (str + paddingRequirement).replace(/-/g, '+').replace(/_/g, '/');
            return atob(standardizedBase);
        };

        function writeLog(msg, level='info') {
            const consoleBox = document.getElementById('console-logs');
            let color = '#a5d6ff';
            if (level === 'success') color = '#3fb950';
            if (level === 'error') color = '#f85149';
            
            consoleBox.innerHTML += `<div style="color: ${color}; margin-bottom:4px;">[${new Date().toLocaleTimeString()}] ${msg}</div>`;
            consoleBox.scrollTop = consoleBox.scrollHeight;
        }

        // Monitors actual runtime values
        function synchronousCookieSync() {
            const currentCookieMatch = document.cookie.match(/(^| )session=([^;]+)/);
            const viewDisplay = document.getElementById('live-cookie-view');
            
            if (currentCookieMatch) {
                viewDisplay.innerText = currentCookieMatch[2];
                return currentCookieMatch[2];
            } else {
                viewDisplay.innerText = "[Empty / No Session Active]";
                return null;
            }
        }

        function initializeSession() {
            const headerConfig = { alg: "HS256", typ: "JWT" };
            const payloadConfig = { username: "guest_user", role: "user" };
            const sampleSignature = "vG48bXpfeXg_UnNhZmVTZWNyZXRLZXk0Mg"; // Precompiled default key footprint

            const completedToken = rawUrlEncode(JSON.stringify(headerConfig)) + "." + 
                                   rawUrlEncode(JSON.stringify(payloadConfig)) + "." + 
                                   sampleSignature;

            document.cookie = "session=" + completedToken + "; path=/; SameSite=Strict";
            
            document.getElementById('auth-interaction').style.display = 'none';
            document.getElementById('deployment-interaction').style.display = 'block';
            
            synchronousCookieSync();
            writeLog("Guest credentials validated. Token saved to cookies storage context.", "success");
        }

        function injectForgedCookie() {
            const textInputValue = document.getElementById('cookie-editor-input').value.trim();
            const feedbackBox = document.getElementById('injection-feedback');
            
            if (!textInputValue) {
                feedbackBox.style.color = "var(--accent-red)";
                feedbackBox.innerText = "Error: Text container input data empty.";
                return;
            }

            // Write straight back into target database structures 
            document.cookie = "session=" + textInputValue + "; path=/; SameSite=Strict";
            synchronousCookieSync();
            
            feedbackBox.style.color = "var(--accent-green)";
            feedbackBox.innerText = "Storage context modified successfully!";
            writeLog(`Manual administrative override requested. Current session token updated manually.`, "info");
            
            setTimeout(() => { feedbackBox.innerText = ""; }, 3000);
        }

        function executeAdminValidation() {
            const notificationWindow = document.getElementById('verification-banner');
            notificationWindow.style.display = "block";

            const rawCookieString = synchronousCookieSync();

            if (!rawCookieString) {
                notificationWindow.className = "status-banner status-error";
                notificationWindow.innerText = "Verification Failure: Session credentials context missing.";
                writeLog("Validation rejection: Session authorization context missing.", "error");
                return;
            }

            const payloadSegments = rawCookieString.split('.');
            if (payloadSegments.length !== 3) {
                notificationWindow.className = "status-banner status-error";
                notificationWindow.innerText = "Parsing Exception: Structural validation failures occurred.";
                writeLog("Structural validation alert: JWT must contain exactly three dot-separated strings.", "error");
                return;
            }

            try {
                const derivedHeader = JSON.parse(rawUrlDecode(payloadSegments[0]));
                const derivedPayload = JSON.parse(rawUrlDecode(payloadSegments[1]));
                const dynamicSignature = payloadSegments[2];

                // Logic Phase 1: Alg protection screening check
                if (derivedHeader.alg !== "none" && derivedHeader.alg !== "NONE") {
                    if (derivedPayload.role === "admin") {
                        notificationWindow.className = "status-banner status-error";
                        notificationWindow.innerText = "Security Halt: Signature verification check failed. Modifying payloads while keeping cryptographic signatures active is blocked.";
                        writeLog("Bypass attempt dropped: Invalid signature payload format.", "error");
                        return;
                    }
                    notificationWindow.className = "status-banner status-error";
                    notificationWindow.innerHTML = `Access Rejected: Standard account profiles (<code>${derivedPayload.role}</code>) cannot reach administration blocks.`;
                    writeLog(`Access Rejected: Access requested by standard role profile: ${derivedPayload.role}`, "info");
                    return;
                }

                // Logic Phase 2: If algorithm is set to none, check the signature block
                if (dynamicSignature !== "") {
                    notificationWindow.className = "status-banner status-error";
                    notificationWindow.innerText = "Validation Anomaly: When 'alg' parameter matches 'none', the final signature segment must remain empty.";
                    writeLog("Parsing Exception: Signature data must be empty under 'none' constraints.", "error");
                    return;
                }

                // Logic Phase 3: Check authorization privilege levels
                if (derivedPayload.role === "admin") {
                    notificationWindow.className = "status-banner status-success";
                    notificationWindow.innerHTML = "🎉 <strong>CONGRATULATIONS! CHALLENGE COMPLETED successfully.</strong><br><br>Captured Authorization Flag: <code>FLAG{good_gal}</code>";
                    writeLog("Success: Valid privilege escalation attack recognized. Administrative console unlocked.", "success");
                } else {
                    notificationWindow.className = "status-banner status-error";
                    notificationWindow.innerHTML = `Bypass Accepted, but your profile value parameters remain evaluated as: <strong>${derivedPayload.role}</strong>`;
                    writeLog("Bypass successful, but target privilege state remains unaltered.", "info");
                }

            } catch (parsingException) {
                notificationWindow.className = "status-banner status-error";
                notificationWindow.innerText = "Syntax Error: Broken structural integrity check. Ensure your base64 strings don't include spaces or raw JSON syntax.";
                writeLog("Parsing Exception: Unreadable token formatting profile structure.", "error");
            }
        }

        function resetLab() {
            document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.getElementById('cookie-editor-input').value = "";
            document.getElementById('verification-banner').style.display = "none";
            document.getElementById('deployment-interaction').style.display = 'none';
            document.getElementById('auth-interaction').style.display = 'block';
            synchronousCookieSync();
            writeLog("State reset completed. Active storage cache deleted.");
        }

        // Initialize display state on initial render cycle
        synchronousCookieSync();
