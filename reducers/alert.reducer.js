const AlertReducer = (state, action) => {
   const { type, payload } = action;

   switch (type) {
      case "SUCCESS":
         return {
            ...state,
            show: true,
            type: "success",
            description: payload.description,
            message: payload.message,
         };
      case "ERROR":
         return {
            ...state,
            show: true,
            type: "error",
            description: payload.description,
            message: payload.message,
         };
      case "RESET": {
         return {
            show: false,
         };
      }
      default:
         return {
            ...state,
         };
   }
};

export default AlertReducer;
