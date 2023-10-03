import "@testing-library/jest-dom/extend-expect";
import mockRouter from "next-router-mock";

jest.mock("next/navigation", () => require("next-router-mock"));

beforeEach(() => {
  mockRouter.replace("/");
});
