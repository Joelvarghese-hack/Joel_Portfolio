# Joel's Personal Finance Workbook

**`Personal_Finance_Workbook.xlsx`** — one dark-themed Excel file, 10 tabs, every number driven by input cells. Built for Canadian dollars (CAD, `$`).

## The one rule
You only ever type into the **gold cells**. Everything else (totals, KPI cards, charts, progress bars) calculates itself. When you change one gold cell, everything downstream updates.

## Tabs
1. **START HERE** – plain-English guide + your weekly/monthly/one-time routine.
2. **Dashboard** – KPI cards + charts. Pick a month from the gold dropdown to drive the monthly view (no 12 separate month tabs).
3. **Income** – paycheque estimator, real paycheque log (what the dashboard trusts), and government money that adds itself.
4. **Expenses** – fixed monthly bills + a takeout/extras log with a budget bar.
5. **Bills & Subscriptions** – tick-when-paid grid, short-term plans, and a monthly bill calendar.
6. **Debt Tracker** – India loan rupee→CAD converter, Avion pay-in-full warning, payoff dates, debt charts.
7. **Savings & Goals** – account balances + 3 goals with progress bars and projected finish dates.
8. **Net Worth** – assets minus liabilities, pulled from the other tabs.
9. **Side Income** – freelance income/expense logs, ready for when earning starts.
10. **Habit Tracker** – daily tick boxes, % complete, charts.

Hidden helper tabs: `Lists` (dropdown options) and `MonthData` (the calculation engine that aggregates everything per month).

## Your routine
- **Weekly:** log paycheques (Income), add takeout spends (Expenses), tick habits (Habit Tracker).
- **Monthly:** update account balances (Savings), tick paid bills (Bills), update Avion balance (Debt), switch the Dashboard month dropdown.
- **One-time (already set up):** pay rate & deduction %, fixed bill amounts, goal targets, India loan rupee amount + exchange rate + interest rates.

## Rebuilding the file
```bash
pip install openpyxl xlsxwriter
python3 build_workbook.py    # writes Personal_Finance_Workbook.xlsx
```

The formula chain is verified end-to-end (income, government money, expenses, savings, debt, net worth) with the `formulas` evaluation engine.
