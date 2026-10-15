// ===============================
// secret.jsx
// ===============================

import {
  useCallback,
  useEffect,
  useRef,
  useState
} from "react";

import axios from "axios";

const backend =
  import.meta.env.VITE_BACKEND_URL;

function renderStatCard(title, value, detail) {
  return (
    <div className="admin-stat">
      <p>{title}</p>
      <strong>{value}</strong>
      <span>{detail}</span>
    </div>
  );
}

function renderInfo(label, value) {

  return (
    <div className="admin-info">
      <span>{label}</span>
      <p>{value === undefined || value === null || value === "" ? "Not available" : value}</p>
    </div>
  );
}

export default function Secret() {

  const [showAdmin, setShowAdmin] =
    useState(false);

  const [showLogin, setShowLogin] =
    useState(false);

  const [password, setPassword] =
    useState("");

  const [loginError, setLoginError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [analytics, setAnalytics] =
    useState(null);

  const [analyticsLoading, setAnalyticsLoading] =
    useState(false);

  const [analyticsError, setAnalyticsError] =
    useState("");

  const [visitorSearch, setVisitorSearch] =
    useState("");

  const [lastUpdated, setLastUpdated] =
    useState(null);

  const [resumeLink, setResumeLink] =
    useState("");

  const [resumePassword, setResumePassword] =
    useState("");

  const [resumeSaving, setResumeSaving] =
    useState(false);

  const [resumeMessage, setResumeMessage] =
    useState("");

  const [resumeMessageType, setResumeMessageType] =
    useState("success");

  const sessionStart = useRef(Date.now());
  const activity = useRef({
    clicks: 0,
    mouseMovements: 0,
    scrollPercentage: 0,
  });

  // =========================
  // VISITOR ID
  // =========================

  const [visitorId] = useState(() => {
    const savedId = localStorage.getItem("visitorId");
    if (savedId) return savedId;

    const newId = crypto.randomUUID();
    localStorage.setItem("visitorId", newId);
    return newId;
  });

  // =========================
  // SECRET TRIGGER
  // =========================

  useEffect(() => {

    let keys = [];

    const secret =
      ["a", "d", "m", "i", "n"];

    const handleKeyDown =
      (e) => {

        keys.push(
          e.key.toLowerCase()
        );

        keys = keys.slice(-5);

        if (
          JSON.stringify(keys) ===
          JSON.stringify(secret)
        ) {

          setShowLogin(true);
        }
      };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, []);

  // =========================
  // LOGIN
  // =========================

  const handleAdminLogin =
    async () => {

      try {

        setLoading(true);

        setLoginError("");

        const res =
          await axios.post(
            `${backend}/api/admin-login`,
            {

              username:
                "admin",

              password
            }
          );

        if (
          res.data.success
        ) {

          localStorage.setItem(
            "adminAuth",
            "true"
          );

          setShowAdmin(true);

          setShowLogin(false);

          setPassword("");
        }

      } catch (err) {

        setLoginError(
          "Wrong Password"
        );

      } finally {

        setLoading(false);
      }
    };

  // =========================
  // AUTO LOGIN
  // =========================

  useEffect(() => {

    const auth =
      localStorage.getItem(
        "adminAuth"
      );

    if (auth === "true") {

      setShowAdmin(true);
    }

  }, []);

  // =========================
  // TRACK CLICKS
  // =========================

  useEffect(() => {

    const handleClick =
      () => {
        activity.current.clicks += 1;
      };

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {

      window.removeEventListener(
        "click",
        handleClick
      );
    };

  }, []);

  // =========================
  // MOUSE MOVEMENTS
  // =========================

  useEffect(() => {

    const handleMouseMove =
      () => {
        activity.current.mouseMovements += 1;
      };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };

  }, []);

  // =========================
  // SCROLL %
  // =========================

  useEffect(() => {

    const handleScroll =
      () => {

        const scrollTop =
          window.scrollY;

        const docHeight =
          document
            .documentElement
            .scrollHeight -
          window.innerHeight;

        activity.current.scrollPercentage = docHeight > 0
          ? Math.min(100, Math.floor((scrollTop / docHeight) * 100))
          : 0;
      };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  // =========================
  // TRACK VISITOR
  // =========================

  useEffect(() => {

    const trackVisitor =
      async () => {

        try {

          const ua =
            navigator.userAgent;

          let os =
            "Unknown";

          if (
            ua.includes("Win")
          ) {
            os =
              "Windows";
          }

          else if (
            ua.includes("Mac")
          ) {
            os = "MacOS";
          }

          else if (
            ua.includes(
              "Linux"
            )
          ) {
            os = "Linux";
          }

          let browser =
            "Unknown";

          if (
            ua.includes(
              "Chrome"
            )
          ) {
            browser =
              "Chrome";
          }

          else if (
            ua.includes(
              "Firefox"
            )
          ) {
            browser =
              "Firefox";
          }

          else if (
            ua.includes(
              "Safari"
            )
          ) {
            browser =
              "Safari";
          }

          let deviceType =
            "Desktop";

          if (
            /mobile/i.test(
              ua
            )
          ) {
            deviceType =
              "Mobile";
          }

          let source =
            "Direct";

          const ref =
            document.referrer;

          if (
            ref.includes(
              "linkedin"
            )
          ) {
            source =
              "LinkedIn";
          }

          else if (
            ref.includes(
              "github"
            )
          ) {
            source =
              "GitHub";
          }

          else if (
            ref.includes(
              "google"
            )
          ) {
            source =
              "Google";
          }

          const duration =
            Math.floor(
              (Date.now() -
                sessionStart.current) /
                1000
            );

          await axios.post(
            `${backend}/api/track`,
            {

              visitorId,

              browser,

              os,

              deviceType,

              language:
                navigator.language,

              platform:
                navigator.platform,

              screen:
                `${window.innerWidth} x ${window.innerHeight}`,

              timezone:
                Intl.DateTimeFormat()
                  .resolvedOptions()
                  .timeZone,

              referrer:
                document.referrer ||
                "Direct Visit",

              source,

              routeHistory:
                [
                  window
                    .location
                    .pathname
                ],

              scrollPercentage: activity.current.scrollPercentage,
              mouseMovements: activity.current.mouseMovements,

              clicks: activity.current.clicks,

              sessionDuration:
                duration,

              lastActiveTime:
                new Date()

            }
          );

        } catch (err) {

          console.log(err);
        }
      };

    trackVisitor();

  }, [visitorId]);

  // =========================
  // FETCH ANALYTICS
  // =========================

  const fetchAnalytics =
    useCallback(async () => {
      setAnalyticsLoading(true);
      setAnalyticsError("");

      try {
        const res = await axios.get(`${backend}/api/analytics`);
        setAnalytics(res.data);
        setLastUpdated(new Date());
      } catch (err) {
        console.error("Could not load visitor analytics:", err);
        setAnalyticsError("Analytics could not be loaded. Try refreshing.");
      } finally {
        setAnalyticsLoading(false);
      }
    }, []);

  useEffect(() => {
    if (showAdmin) {
      fetchAnalytics();
    }
  }, [showAdmin, fetchAnalytics]);

  useEffect(() => {
    if (!showAdmin) return;

    let isCurrent = true;
    axios.get(`${backend}/api/resume-link`)
      .then((res) => {
        if (isCurrent) setResumeLink(res.data.url || "");
      })
      .catch((err) => {
        console.error("Could not load the resume link:", err);
        if (isCurrent) {
          setResumeMessage("Could not load the saved resume link.");
          setResumeMessageType("error");
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [showAdmin]);

  const saveResumeLink = async (event) => {
    event.preventDefault();
    setResumeSaving(true);
    setResumeMessage("");

    try {
      const res = await axios.put(`${backend}/api/admin/resume-link`, {
        url: resumeLink,
        password: resumePassword,
      });
      setResumeLink(res.data.url);
      setResumePassword("");
      setResumeMessage("Resume link saved. The public download button now uses this link.");
      setResumeMessageType("success");
    } catch (err) {
      console.error("Could not save the resume link:", err);
      setResumeMessage(
        err.response?.data?.message || "Could not save the resume link. Please try again."
      );
      setResumeMessageType("error");
    } finally {
      setResumeSaving(false);
    }
  };

  const visitors =
    analytics?.visitors || [];

  const filteredVisitors = visitors.filter((visitor) => {
    const searchableDetails = [
      visitor.ip,
      visitor.browser,
      visitor.os,
      visitor.deviceType,
      visitor.source,
      visitor.referrer,
      visitor.language,
      visitor.platform,
      visitor.timezone,
      ...(visitor.routeHistory || []),
    ].join(" ").toLowerCase();

    return searchableDetails.includes(visitorSearch.trim().toLowerCase());
  });

  const formatDate = (date) => {
    if (!date) return "Not available";
    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime())
      ? "Not available"
      : parsedDate.toLocaleString();
  };

  return (
    <>
      {showLogin && (
        <div className="admin-backdrop" role="presentation">
          <form
            className="admin-login"
            onSubmit={(event) => {
              event.preventDefault();
              handleAdminLogin();
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-login-title"
          >
            <p className="admin-eyebrow">Private area</p>
            <h2 id="admin-login-title">Admin access</h2>
            <p className="admin-login-copy">Enter your password to view portfolio analytics.</p>
            <label className="admin-label" htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="admin-input"
              placeholder="Enter password"
              autoComplete="current-password"
              required
            />
            {loginError && <p className="admin-error" role="alert">{loginError}</p>}
            <div className="admin-actions">
              <button type="button" onClick={() => setShowLogin(false)} className="admin-button admin-button-secondary">
                Cancel
              </button>
              <button type="submit" disabled={loading} className="admin-button admin-button-primary">
                {loading ? "Checking..." : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      )}

      {showAdmin && (
        <div className="admin-backdrop admin-dashboard-backdrop">
          <main className="admin-dashboard" aria-labelledby="admin-dashboard-title">
            <header className="admin-header">
              <div>
                <p className="admin-eyebrow">Portfolio insights</p>
                <h1 id="admin-dashboard-title">Visitor analytics</h1>
                <p className="admin-subtitle">
                  {lastUpdated ? `Last updated ${lastUpdated.toLocaleTimeString()}` : "Your portfolio activity at a glance"}
                </p>
              </div>
              <div className="admin-header-actions">
                <button
                  type="button"
                  onClick={fetchAnalytics}
                  disabled={analyticsLoading}
                  className="admin-button admin-button-secondary"
                >
                  {analyticsLoading ? "Refreshing..." : "↻ Refresh"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem("adminAuth");
                    setResumePassword("");
                    setShowAdmin(false);
                  }}
                  className="admin-button admin-button-secondary"
                >
                  Sign out
                </button>
              </div>
            </header>

            <section className="admin-stats" aria-label="Visitor summary">
              {renderStatCard("Total visitors", analytics?.totalVisitors ?? 0, "Tracked browsers")}
              {renderStatCard("Unique visitors", analytics?.uniqueVisitors ?? 0, "Distinct visitor IDs")}
              {renderStatCard("Active visitors", analytics?.activeUsers ?? 0, "Currently marked active")}
              {renderStatCard("Returning visitors", analytics?.returningVisitors ?? 0, "Visited more than once")}
            </section>

            <section className="admin-resume-settings" aria-labelledby="admin-resume-title">
              <div>
                <p className="admin-eyebrow">Public portfolio download</p>
                <h2 id="admin-resume-title">Resume link</h2>
                <p className="admin-resume-description">
                  Paste a Google Drive sharing link. Make sure its access is set to “Anyone with the link”.
                </p>
              </div>
              <form className="admin-resume-form" onSubmit={saveResumeLink}>
                <label className="admin-label" htmlFor="admin-resume-url">Google Drive URL</label>
                <input
                  id="admin-resume-url"
                  type="url"
                  value={resumeLink}
                  onChange={(event) => setResumeLink(event.target.value)}
                  className="admin-input"
                  placeholder="https://drive.google.com/file/d/..."
                  required
                />
                <label className="admin-label" htmlFor="admin-resume-password">Confirm admin password to save</label>
                <input
                  id="admin-resume-password"
                  type="password"
                  value={resumePassword}
                  onChange={(event) => setResumePassword(event.target.value)}
                  className="admin-input"
                  placeholder="Admin password"
                  autoComplete="current-password"
                  required
                />
                <div className="admin-resume-actions">
                  <button type="submit" disabled={resumeSaving} className="admin-button admin-button-primary">
                    {resumeSaving ? "Saving..." : "Save resume link"}
                  </button>
                  {resumeLink && (
                    <a className="admin-button admin-button-secondary" href={resumeLink} target="_blank" rel="noopener noreferrer">
                      Preview link ↗
                    </a>
                  )}
                </div>
                {resumeMessage && (
                  <p className={`admin-resume-message ${resumeMessageType}`} role="status">
                    {resumeMessage}
                  </p>
                )}
              </form>
            </section>

            <section className="admin-visitors" aria-labelledby="visitor-list-title">
              <div className="admin-visitors-heading">
                <div>
                  <h2 id="visitor-list-title">Visitor details</h2>
                  <p>{filteredVisitors.length} of {visitors.length} records</p>
                </div>
                <input
                  type="search"
                  value={visitorSearch}
                  onChange={(event) => setVisitorSearch(event.target.value)}
                  className="admin-search"
                  placeholder="Search visitors, source, device..."
                  aria-label="Search visitor records"
                />
              </div>

              {analyticsError && <p className="admin-error admin-load-error" role="alert">{analyticsError}</p>}
              {analyticsLoading && !analytics && <p className="admin-empty">Loading visitor data...</p>}
              {!analyticsLoading && !analyticsError && filteredVisitors.length === 0 && (
                <p className="admin-empty">
                  {visitors.length ? "No visitor records match your search." : "No visitor records yet."}
                </p>
              )}

              <div className="admin-visitor-list">
                {filteredVisitors.map((visitor) => (
                  <article className="admin-visitor-card" key={visitor._id}>
                    <header className="admin-visitor-header">
                      <div>
                        <span className="admin-visitor-id">Visitor {visitor.visitorId || visitor._id}</span>
                        <p>{visitor.isReturning ? "Returning visitor" : "First visit"} · First seen {formatDate(visitor.createdAt)}</p>
                      </div>
                      <span className={`admin-badge${visitor.active ? " is-active" : ""}`}>
                        {visitor.active ? "Active" : "Inactive"}
                      </span>
                    </header>
                    <div className="admin-info-grid">
                      {renderInfo("IP address", visitor.ip)}
                      {renderInfo("Browser", visitor.browser)}
                      {renderInfo("Operating system", visitor.os)}
                      {renderInfo("Device type", visitor.deviceType)}
                      {renderInfo("Traffic source", visitor.source)}
                      {renderInfo("Referrer", visitor.referrer)}
                      {renderInfo("Language", visitor.language)}
                      {renderInfo("Platform", visitor.platform)}
                      {renderInfo("Screen size", visitor.screen)}
                      {renderInfo("Timezone", visitor.timezone)}
                      {renderInfo("Total visits", visitor.totalVisits)}
                      {renderInfo("Last active", formatDate(visitor.lastActiveTime))}
                      {renderInfo("Clicks", visitor.clicks)}
                      {renderInfo("Scroll depth", visitor.scrollPercentage == null ? undefined : `${visitor.scrollPercentage}%`)}
                      {renderInfo("Mouse movements", visitor.mouseMovements)}
                      {renderInfo("Session duration", visitor.sessionDuration == null ? undefined : `${visitor.sessionDuration}s`)}
                      {renderInfo("Pages visited", visitor.routeHistory?.join(", "))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}