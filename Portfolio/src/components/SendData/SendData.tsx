import axios from "axios";
import React, { useEffect } from "react";

interface SendDataProps {
  data: any;
  sheetId: string;
}

const SendDataToGoogleSheet: React.FC<SendDataProps> = ({ data, sheetId }) => {
  useEffect(() => {
    const wyslijDaneDoArkuszaGoogle = async (dane: any) => {
      try {
        const odpowiedz = await axios.post(
          `https://sheet.best/api/sheets/${sheetId}`,
          dane
        );
        console.log("Dane wysłane pomyślnie:", odpowiedz.data);
      } catch (error) {
        console.error("Błąd podczas wysyłania danych:", error);
      }
    };

    wyslijDaneDoArkuszaGoogle(data);
  }, [data, sheetId]);

  return null;
};

export default SendDataToGoogleSheet;
