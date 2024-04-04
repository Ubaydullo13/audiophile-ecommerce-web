export const formatPrice = (price) => {
    const dollarsAmount = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2));
    return dollarsAmount;
  };