import { investment } from "src/app";

//function expects a return following the interface investment.
export function calculatePortfolioPerformance(initialInvestment :number, currentValue:number): investment {
    const profitOrLoss = currentValue - initialInvestment ;

    const percentageChange = (profitOrLoss / initialInvestment) * 100;

    //Above 30 excellent. Below 30 solid gain. Below 10 modest gain.
    //Zero no change. Bellow 0 until -10 is minor loss. Bellow -10 is significant loss.
    const solidRating: number = 30;
    const modestRating: number = 10;
    const zeroRating: number = 0;
    const poorRating: number = -10;
  
    //ternary (replacing if statement).
    let performanceSummary: string;
    percentageChange >= solidRating ? performanceSummary = "Excellent Performance! Your investments are doing great." :
    percentageChange >= modestRating ? performanceSummary = "Solid gain. Keep monitoring your investments." :
    percentageChange > zeroRating ? performanceSummary = "Modest gain. Your portfolio is growing slowly." :
    percentageChange === zeroRating ? performanceSummary = "No change. Your portfolio is holding steady." :
    percentageChange >= poorRating ? performanceSummary = "Minor loss. Stay calm and review your options.":
    performanceSummary = "Significant Loss. Review your portfolio strategy.";

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
};