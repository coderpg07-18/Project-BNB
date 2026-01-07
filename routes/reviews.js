const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require("../Schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/review.js");

router.post("/", isLoggedIn, validateReview,
  wrapAsync( reviewController.createListing )
);

router.delete("/:reviewId", isLoggedIn, isReviewAuthor,
  wrapAsync( reviewController.destroyListing ),
);


module.exports = router;