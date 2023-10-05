import {Request, Response, NextFunction} from "express";

export const erros = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  if (err instanceof Error && res.status(400)) {
    return res.status(400).json({
      error: err.message,
    });
  }
  if (err instanceof Error && res.status(404)) {
    return res.status(404).json({
      status: "error",
      message: "Access denied",
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
};
