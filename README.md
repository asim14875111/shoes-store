#  🛒 Checkout Page    

 A complete checkout page with validation, quantity managment, and local storage support.

 ## 🔍 Features 

 ### 📝 1. Form Inputs & Validation

 - User must fill out all the details.
 - The form has **required field checks**-submission is block if any input filed is empty.
 - User cannot proceed to the next page without completing the form.

 ### 💾 2. Local Storage saving
 - All form data is stored in `local storage`.
 - Quantity of products and total price are also saved for persistent access.
 - On the second page, all data is **fetched from local storage** and displayed in summary.


 ### ➕➖3. Qantity Managment
 - Each item has **Plus (+)** and **Minus (-)** buttons to update quantity.
 - Total price updates in real time based on quantity.
 - Updated quantity and price are saved in `local storage`.

### ✅ 4. Terms of Service Check.
 - A checkbox is included for **Terms of service agreement**.
 - If unchecked, an alert is shown and submission is blocked.


### 5. Order Summary Page
 - After submission, the second page shows:
 - All user detaild from the form
 - Product quantity
 - Total price
- Data is dynamically pulled from `localStorage`.

## 🛠️ Technologies Used
- HTML
- Tailwind and Css
- Javascript

## 📦 How to Run

1. Open `index.HTML` in your browser.
2. Fill all fields, manage product quantity, and agree to terms.
3. Submit to view the final order details pulled from localStorage.


## ✅ Conclusion

A simple and effective checkout flow with vvalidation,local storage, and dynamic product handling.


