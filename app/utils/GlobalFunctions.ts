// Define common functions used throughout the application.

export const capitalizeFLetter = (text: string): string => {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'approved':
      return '#008000';
    case 'processing':
      return '#FFA500';
    case 'rejected':
      return '#8F3333';
    default:
      return '#000000';
  }
};
