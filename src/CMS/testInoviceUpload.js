import React from "react";
import { firestore } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { addDoc, collection } from "firebase/firestore";

export default function TestInoviceUpload() {

  let newOrder;
// eslint-disable-next-line
  const testOrder = async () => {
    const ordersCollection = collection(firestore, "Orders");

    try {
      newOrder = await addDoc(ordersCollection, {
        "agentReferal": 0.1,
        "createdAt": "November 24, 2023 at 3:16:31 PM UTC+2",
        "deliveryAddress": "123 Sade Street, Johannesburg Gauteng 1658",
        "deliveryDate":"November 28, 2023 at 3:16:31 PM UTC+2",
        "deliveryGuy":"Ben",
        "deliveryStatus":"Ongoing",
        "deliveryFee": 150.00,
        "orderNumber": "#CMD2134",
        "orderSummary": 3000.00,
        "tax": 0.15,
        "products": [
            {"productName":"Sneakers","businessName":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
            {"productName":"Sneakers","businessName":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
            {"productName":"Sneakers","businessName":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
        ],
        "purchaseDate": "November 28, 2023 at 3:16:31 PM UTC+2",
        "total": 3170.00,
        "userName":"Mandy",
        "userSurname":"June",
        "userEmail":"June.M@gmal.com",
      }
      );

      alert("The Orders invoice has been added successfully.");
      console.log("New invoice document ID:", newOrder.id);
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
  };
  // testOrder();
  return (
    <div>
      <p>testInoviceUpload</p>
      
    </div>
  );
}
