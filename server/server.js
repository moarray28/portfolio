// ===============================
// server.js
// ===============================

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const app = express();

app.use(cors({
  origin:
    process.env.FRONTEND_URL || "*",
  credentials: true
}));

app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGO_URL
)
.then(() => {
  console.log(
    "MongoDB Connected"
  );
})
.catch((err) => {
  console.log(err);
});

const visitorSchema =
  new mongoose.Schema({

    visitorId: String,

    ip: String,

    browser: String,

    os: String,

    deviceType: String,

    language: String,

    platform: String,

    screen: String,

    timezone: String,

    referrer: String,

    source: String,

    isReturning: Boolean,

    totalVisits: {
      type: Number,
      default: 1
    },

    routeHistory: [String],

    scrollPercentage: Number,

    mouseMovements: Number,

    clicks: Number,

    sessionDuration: Number,

    lastActiveTime: Date,

    active: {
      type: Boolean,
      default: true
    },

    createdAt: {
      type: Date,
      default: Date.now
    }

  });

const Visitor =
  mongoose.model(
    "Visitor",
    visitorSchema
  );

const adminSchema =
  new mongoose.Schema({

    username: String,

    password: String

  });

const Admin =
  mongoose.model(
    "Admin",
    adminSchema
  );

// =========================
// ADMIN LOGIN
// =========================

app.post(
  "/api/admin-login",
  async (req, res) => {

    try {

      const {
        username,
        password
      } = req.body;

      const admin =
        await Admin.findOne({
          username
        });

      if (!admin) {

        return res.status(404)
          .json({
            success: false
          });
      }

      const isMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!isMatch) {

        return res.status(401)
          .json({
            success: false
          });
      }

      res.status(200).json({
        success: true
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false
      });
    }
  }
);

// =========================
// TRACK VISITOR
// =========================

app.post(
  "/api/track",
  async (req, res) => {

    try {

      // IGNORE YOURSELF

      if (
        req.body.visitorId ===
        process.env.ADMIN_VISITOR_ID
      ) {

        return res.status(200)
          .json({
            message:
              "Admin ignored"
          });
      }

      const ip =
        req.headers[
          "x-forwarded-for"
        ] ||
        req.socket.remoteAddress;

      const data =
        req.body;

      let existingVisitor =
        await Visitor.findOne({

          visitorId:
            data.visitorId

        });

      if (
        existingVisitor
      ) {

        existingVisitor.totalVisits += 1;

        existingVisitor.isReturning =
          true;

        existingVisitor.lastActiveTime =
          data.lastActiveTime;

        existingVisitor.routeHistory =
          data.routeHistory;

        existingVisitor.scrollPercentage =
          data.scrollPercentage;

        existingVisitor.mouseMovements =
          data.mouseMovements;

        existingVisitor.clicks =
          data.clicks;

        existingVisitor.sessionDuration =
          data.sessionDuration;

        await existingVisitor.save();

        return res.json({
          message:
            "Returning visitor updated"
        });
      }

      const visitor =
        new Visitor({

          ...data,

          ip,

          isReturning:
            false

        });

      await visitor.save();

      res.status(201).json({
        message:
          "Visitor tracked"
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Server Error"
      });
    }
  }
);

// =========================
// ANALYTICS
// =========================

app.get(
  "/api/analytics",
  async (req, res) => {

    try {

      const visitors =
        await Visitor.find()
          .sort({
            createdAt: -1
          });

      res.json({

        totalVisitors:
          visitors.length,

        uniqueVisitors:
          new Set(
            visitors.map(
              (v) =>
                v.visitorId
            )
          ).size,

        activeUsers:
          visitors.filter(
            (v) =>
              v.active
          ).length,

        returningVisitors:
          visitors.filter(
            (v) =>
              v.isReturning
          ).length,

        visitors

      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Server Error"
      });
    }
  }
);

// =========================
// CONTACT
// =========================

app.post(
  "/api/contact",
  async (req, res) => {

    try {

      const {
        name,
        email,
        message
      } = req.body;

      const transporter =
        nodemailer.createTransport({

          service: "gmail",

          auth: {

            user:
              process.env.EMAIL,

            pass:
              process.env.EMAIL_PASSWORD
          }
        });

      await transporter.sendMail({

        from: email,

        to:
          process.env.EMAIL,

        subject:
          `Portfolio Contact from ${name}`,

        text: message

      });

      res.status(200).json({
        message:
          "Message sent"
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Error"
      });
    }
  }
);

// =========================
// RESUME
// =========================

const resumeFilePath =
  path.join(
    __dirname,
    "resume.pdf"
  );

app.get(
  "/download/resume",
  (req, res) => {

    res.download(
      resumeFilePath,
      "YourResume.pdf"
    );
  }
);

app.get("/", (req, res) => {

  res.json({
    message:
      "Portfolio Backend Running 🚀"
  });
});

const PORT =
  process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );
});