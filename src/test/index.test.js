import React from "react";
import "@testing-library/jest-dom";
import {render, screen} from '@testing-library/react'
import ProgressBar from "../index";

describe("ProgressBar Controller", () => {
  test("should appear titleText, actionText, descriptionText", () => {
    render(
      <ProgressBar
        showButton={true}
        titleButton={"actionText"}
        titleText={"titleText"}
        descriptionText={"descriptionText"}
        percentage={90}
      />
    );
    expect(screen.getByTestId('progressBarTitle')).toContainHTML("titleText");
    expect(screen.getByTestId('progressBarButton')).toContainHTML("actionText");
    expect(screen.getByTestId('progressBarDescription')).toContainHTML("descriptionText");
  });

  test("should not appear actionText", () => {
    render(
      <ProgressBar
        showButton={false}
        titleButton={"actionText"}
        percentage={90}
      />
    );
    expect(screen.queryByText('actionText')).toBeNull();
  });

  test("<p> should not instance", () => {
    render(
      <ProgressBar
        showButton={true}
        percentage={90}
      />
    );
    expect(screen.queryByTestId(/progressBarTitle/)).toBeNull();
  });

  test("only titleText should appear", () => {
    render(
      <ProgressBar
        titleText={"titleText"}
        showButton={true}
        percentage={90}
      />
    );
    expect(screen.getByTestId('progressBarTitle')).toContainHTML("titleText");
    expect(screen.queryByTestId(/progressBarButton/)).toBeNull();
  });

  test("only actionText should appear", () => {
    render(
      <ProgressBar
        titleButton={"actionText"}
        showButton={true}
        percentage={90}
      />
    );
    expect(screen.getByTestId('progressBarButton')).toContainHTML("actionText");
    expect(screen.getByTestId('progressBarTitle')).not.toContainHTML("titleText");
  });
});
