import { body, validationResult, ValidationChain } from "express-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

const validationRules: ValidationChain[] = [
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Name is required and must be a string"),

  body("superpower")
    .isString()
    .notEmpty()
    .withMessage("Superpower is required and must be a string"),

  body("humilityScore")
    .isInt({ min: 1, max: 10 })
    .withMessage("Humility Score must be an integer between 1 and 10"),
];

const validate: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

export const validateSuperhero: RequestHandler[] = [
  ...validationRules,
  validate,
];
