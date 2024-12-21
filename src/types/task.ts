// Add to existing types
export interface OrderItem {
  id: string;
  type: ItemType;
  name: string;
  quantity: number;
  actualQuantity?: number;
  driverDetails?: DriverEnteredDetails; // Add this line
}