import joi from "joi";

export const validateOrderById = (ordId) => {
  const Schema = joi.object({
    _id: joi.string().required(),
  });
  return Schema.validateAsync(ordId);
};

export const validateNewOrder = (newOrd) => {
  const Schema = joi.object({
    quantity: joi.number().required(),
    paymode: joi.string().required(),
    status: joi.string(),
    paymentDetails: joi
      .array()
      .items(
        joi.object({
          itemTotal: joi.number().required(),
          promo: joi.number().required(),
          tax: joi.number().required(),
        })
      ),
  });
  return Schema.validateAsync(newOrd);
};
