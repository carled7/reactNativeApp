export const DailyReportSchema = {
  name: "DailyReport",
  properties: {
    _id: "string",
    reference_date: "date",
    total_calory_amount: "float",
    total_protein_amount: "float",
    total_water_amount: "float",
  },

  primaryKey: "_id",
};

export const FoodReportSchema = {
  name: "FoodReport",
  properties: {
    _id: "string",
    food: "string",
    reference_day: "DailyReport?",
    created_at: "string",
    total_calory_amount: "float",
    total_protein_amount: "float",
    weight: "float",
  },

  primaryKey: "_id",
};
