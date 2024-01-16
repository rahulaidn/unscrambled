// const validationInput = (
//     value: string,
//     type: string,
//     length: number,
//     regExPattern?: RegExp
//   ): boolean => {
//     switch (type) {
//       case "string":
//         if (value.length > length) {
//           return false;
//         }
//         return true;
//       //   return true;
//       // case "unitOfMeasure": {
//       //   if (value.length > 0 && value.length === 1 && value === "-") {
//       //     return true;
//       //   }
//       //   const valueValidation = value.split(".");
//       //   if (value.length > 0 && Number.isNaN(Number(value))) {
//       //     return false;
//       //   }
//       //   if (
//       //     valueValidation.length > 2 ||
//       //     (valueValidation.length > 1 && valueValidation[1].length > length)
//       //   ) {
//       //     return false;
//       //   }
//       //   return true;
//       // }
//       case "REGEXVALIDATION": {
//         const regex = new RegExp(regExPattern ?? "");
//         return regex.test(value);
//       }
//       case "NUMBER": {
//         const valueValidation = value.split(".");
//         if (value.length > 0 && Number.isNaN(Number(value))) {
//           return false;
//         }
  
//         if (valueValidation.length > 1) {
//           return false;
//         }
//         if (parseInt(value, 10) > length) {
//           return false;
//         }
//         return true;
//       }
//       case 'NUMBER_DECIMAL': {
//           const valueValidation = value.split('.');
//           if (
//             value.length > 0 &&
//             Number.isNaN(Number(value)) &&
//             !value.startsWith('.')
//           ) {
//             return false;
//           }
//           if (value.startsWith('-') || value.startsWith('+')) {
//             return false;
//           }
    
//           if (valueValidation.length > 2) {
//             return false;
//           }
//           if (value.length > length) {
//             return false;
//           }
//           return true;
//         }
//         case 'NUMBER': {
//           const valueValidation = value.split('.');
//           if (value.length > 0 && Number.isNaN(Number(value))) {
//               return false;
//             }
//           if (value.startsWith('-') || value.startsWith('+')) {
//             return false;
//           }
//           if (valueValidation.length > 1) {
//             return false;
//           }
//           if (value.length > length) {
//             return false;
//           }
//           return true;
//         }
//     }
//   };
  
//   export {validationInput}
  