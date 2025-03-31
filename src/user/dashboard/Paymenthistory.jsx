const Paymenthistory = () => {
    const paymentData = [
      { amount: "$20.00", date: "2025-03-20", method: "Credit Card", status: "Completed" },
      { amount: "$15.50", date: "2025-03-18", method: "PayPal", status: "Pending" },
      { amount: "$30.00", date: "2025-03-15", method: "Debit Card", status: "Completed" },
    ];
  
    return (
      <div className="bg-white shadow-md border border-gray-200 p-6 mb-8 mx-[100px] mt-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment History</h2>
        <ul className="space-y-4">
          {paymentData.map((payment, index) => (
            <li key={index} className="p-4 bg-gray-100 flex justify-between">
              <div>
                <p className="font-semibold">{payment.amount}</p>
                <p className="text-sm text-gray-600">{payment.date} | {payment.method}</p>
              </div>
              <span className={`text-sm font-medium ${payment.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                {payment.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Paymenthistory;
  