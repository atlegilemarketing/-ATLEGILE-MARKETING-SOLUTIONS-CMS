import React from "react";
import { firebase, firestore } from "../config";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { addDoc, collection } from "firebase/firestore";

export default function TestInoviceUpload() {
  //const [user] = useAuthState(firebase.auth());
  let newOrder;

  const testOrder = async () => {
    const ordersCollection = collection(firestore, "Orders");

    try {
      newOrder = await addDoc(ordersCollection, {
        "agentReferal": 0.1,
        "createdAt": "November 28, 2023 at 3:16:31 PM UTC+2",
        "deliveryAddress": "123 Sade Street, Johannesburg Gauteng 1658",
        "deliveryDate":"November 28, 2023 at 3:16:31 PM UTC+2",
        "deliveryGuy":"Ben",
        "deliveryFee": 150.00,
        "orderNumber": "#CMD2134",
        "orderSummary": 3000.00,
        "price": 4500.00,
        "products": [
            {"name":"Sneakers","business":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
            {"name":"Sneakers","business":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
            {"name":"Sneakers","business":"Nike","price":856.23,"quantity":2,"total":(856.23*2)},
        ],
        "purchaseDate": "24 November 2023",
        "total": 3170.00,
        "userName":"Mandy",
        "userSurname":"June",
      }
      );

      alert("The Orders invoice has been added successfully.");
      console.log("New invoice document ID:", newOrder.id);
    } catch (error) {
      console.error("Error creating invoice:", error);
    }
  };
  //testOrder();
  return (
    <div>
      <p>testInoviceUpload</p>
      
    </div>
  );
}
