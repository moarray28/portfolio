// ===============================
// secret.jsx
// ===============================

import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

const backend =
  import.meta.env.VITE_BACKEND_URL;

function StatCard({
  title,
  value
}) {

  return (

    <div className="rounded-3xl bg-gray-900 border border-white/10 p-6">

      <p className="text-gray-400 mb-2">
        {title}
      </p>

      <h1 className="text-4xl font-black text-white">
        {value}
      </h1>

    </div>
  );
}

function Info({
  label,
  value
}) {

  return (

    <div>

      <p className="text-gray-500 text-sm mb-1 uppercase">
        {label}
      </p>

      <p className="text-white break-words">
        {value || "N/A"}
      </p>

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

  const [clicks, setClicks] =
    useState(0);

  const [mouseMovements, setMouseMovements] =
    useState(0);

  const [scrollPercentage, setScrollPercentage] =
    useState(0);

  const sessionStart = Date.now();

  // =========================
  // VISITOR ID
  // =========================

  let visitorId =
    localStorage.getItem(
      "visitorId"
    );

  if (!visitorId) {

    visitorId =
      crypto.randomUUID();

    localStorage.setItem(
      "visitorId",
      visitorId
    );
  }

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

        setClicks(
          (prev) =>
            prev + 1
        );
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

        setMouseMovements(
          (prev) =>
            prev + 1
        );
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

        const scroll =
          (scrollTop /
            docHeight) *
          100;

        setScrollPercentage(
          Math.floor(scroll)
        );
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
                sessionStart) /
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

              scrollPercentage,

              mouseMovements,

              clicks,

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

  }, []);

  // =========================
  // FETCH ANALYTICS
  // =========================

  useEffect(() => {

    if (!showAdmin)
      return;

    const fetchAnalytics =
      async () => {

        try {

          const res =
            await axios.get(
              `${backend}/api/analytics`
            );

          setAnalytics(
            res.data
          );

        } catch (err) {

          console.log(err);
        }
      };

    fetchAnalytics();

  }, [showAdmin]);

  const visitors =
    analytics?.visitors || [];

  return (
    <>

      {showLogin && (

        <div className="fixed inset-0 bg-black/80 z-[999999] flex items-center justify-center p-6">

          <div className="w-full max-w-sm bg-[#0f0f0f] border border-white/10 rounded-3xl p-7">

            <h1 className="text-3xl font-black text-white mb-2">
              Admin Access
            </h1>

            <p className="text-gray-400 mb-6">
              Enter password
            </p>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="w-full bg-black border border-white/10 rounded-2xl px-4 py-4 text-white outline-none"
              placeholder="Password"
            />

            {loginError && (

              <p className="text-red-500 text-sm mt-3">
                {loginError}
              </p>
            )}

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  setShowLogin(false)
                }
                className="flex-1 bg-gray-800 text-white py-3 rounded-2xl"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleAdminLogin
                }
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-3 rounded-2xl"
              >
                {
                  loading
                    ? "Checking..."
                    : "Login"
                }
              </button>

            </div>

          </div>

        </div>
      )}

      {showAdmin && (

        <div className="fixed inset-0 bg-black/95 overflow-y-auto z-[99999] p-6">

          <div className="max-w-7xl mx-auto">

            <div className="flex justify-between items-center mb-10">

              <h1 className="text-5xl font-black text-white">
                Secret Analytics
              </h1>

              <button
                onClick={() => {

                  localStorage.removeItem(
                    "adminAuth"
                  );

                  setShowAdmin(false);
                }}
                className="bg-red-500 text-white px-5 py-3 rounded-xl"
              >
                Logout
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">

              <StatCard
                title="Total Visitors"
                value={
                  analytics?.totalVisitors || 0
                }
              />

              <StatCard
                title="Unique Visitors"
                value={
                  analytics?.uniqueVisitors || 0
                }
              />

              <StatCard
                title="Active Users"
                value={
                  analytics?.activeUsers || 0
                }
              />

              <StatCard
                title="Returning Visitors"
                value={
                  analytics?.returningVisitors || 0
                }
              />

            </div>

            <div className="space-y-5">

              {visitors.map(
                (visitor) => (

                  <div
                    key={
                      visitor._id
                    }
                    className="bg-gray-900 border border-white/10 rounded-3xl p-6"
                  >

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

                      <Info
                        label="IP"
                        value={
                          visitor.ip
                        }
                      />

                      <Info
                        label="Browser"
                        value={
                          visitor.browser
                        }
                      />

                      <Info
                        label="OS"
                        value={
                          visitor.os
                        }
                      />

                      <Info
                        label="Device"
                        value={
                          visitor.deviceType
                        }
                      />

                      <Info
                        label="Source"
                        value={
                          visitor.source
                        }
                      />

                      <Info
                        label="Clicks"
                        value={
                          visitor.clicks
                        }
                      />

                      <Info
                        label="Scroll %"
                        value={
                          visitor.scrollPercentage
                        }
                      />

                      <Info
                        label="Visits"
                        value={
                          visitor.totalVisits
                        }
                      />

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>
      )}

    </>
  );
}