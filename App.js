import { useState } from 'react';
import AccountForm from './components/AccountForm';
import AccountSummary from './components/AccountSummary';

export default function App() {
  const [accountData, setAccountData] = useState(null);

  if (accountData) {
    return (
      <AccountSummary
        data={accountData}
        onReset={() => setAccountData(null)}
      />
    );
  }

  return (
    <AccountForm
      onSubmit={(data) => setAccountData(data)}
    />
  );
}