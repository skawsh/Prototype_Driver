import { Task } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    orderId: '1932',
    customerName: 'John Smith',
    phoneNumber: '8197739892',
    status: 'PICKUP',
    priority: 'HIGH',
    location: {
      latitude: 17.4485,
      longitude: 78.3857,
      address: 'Raidurga, Hyderabad'
    },
    dropLocation: {
      latitude: 17.4400,
      longitude: 78.3489,
      address: 'Gachibowli, Hyderabad'
    },
    scheduledTime: '2024-03-15T10:00:00Z',
    specialInstructions: 'Handle with care',
    distance: 2.5,
    serviceType: 'PREMIUM',
    estimatedWeight: 2.5,
    items: [
      { id: '1', type: 'PAIR', name: 'formal suit', quantity: 1 },
      { id: '2', type: 'SINGLE', name: 'coat', quantity: 1 }
    ]
  },
  {
    id: '2',
    orderId: '1933',
    customerName: 'Sarah Johnson',
    phoneNumber: '8197739858',
    status: 'PICKUP',
    priority: 'MEDIUM',
    location: {
      latitude: 17.4400,
      longitude: 78.3489,
      address: 'Gachibowli, Hyderabad'
    },
    dropLocation: {
      latitude: 17.4486,
      longitude: 78.3908,
      address: 'Madhapur, Hyderabad'
    },
    scheduledTime: '2024-03-15T11:30:00Z',
    distance: 4.2,
    serviceType: 'EXPRESS',
    estimatedWeight: 1.8,
    items: [
      { id: '3', type: 'SINGLE', name: 'saree', quantity: 2 },
      { id: '4', type: 'SINGLE', name: 'blouse', quantity: 2 }
    ]
  },
  {
    id: '3',
    orderId: '1934',
    customerName: 'Michael Brown',
    phoneNumber: '8197739777',
    status: 'COLLECT',
    priority: 'LOW',
    location: {
      latitude: 17.4486,
      longitude: 78.3908,
      address: 'Madhapur, Hyderabad'
    },
    deliveryLocation: {
      latitude: 17.4400,
      longitude: 78.3489,
      address: 'Hitec City, Hyderabad'
    },
    scheduledTime: '2024-03-15T14:00:00Z',
    specialInstructions: 'Call before arrival',
    distance: 1.8,
    serviceType: 'REGULAR',
    estimatedWeight: 3.0,
    items: [
      { id: '5', type: 'PAIR', name: 'jeans', quantity: 2 },
      { id: '6', type: 'PAIR', name: 'shirts', quantity: 3 }
    ]
  },
  {
    id: '4',
    orderId: '1935',
    customerName: 'Emily Davis',
    phoneNumber: '8197739666',
    status: 'PICKUP',
    priority: 'HIGH',
    location: {
      latitude: 17.4500,
      longitude: 78.3800,
      address: 'Kondapur, Hyderabad'
    },
    dropLocation: {
      latitude: 17.4450,
      longitude: 78.3750,
      address: 'KPHB, Hyderabad'
    },
    scheduledTime: '2024-03-15T15:00:00Z',
    specialInstructions: 'Fragile items',
    distance: 3.2,
    serviceType: 'PREMIUM',
    estimatedWeight: 2.2,
    items: [
      { id: '7', type: 'SINGLE', name: 'dress', quantity: 2 },
      { id: '8', type: 'PAIR', name: 'curtains', quantity: 1 }
    ]
  },
  {
    id: '5',
    orderId: '1936',
    customerName: 'David Wilson',
    phoneNumber: '8197739555',
    status: 'COLLECT',
    priority: 'MEDIUM',
    location: {
      latitude: 17.4550,
      longitude: 78.3900,
      address: 'Jubilee Hills, Hyderabad'
    },
    deliveryLocation: {
      latitude: 17.4600,
      longitude: 78.3950,
      address: 'Banjara Hills, Hyderabad'
    },
    scheduledTime: '2024-03-15T16:30:00Z',
    distance: 2.9,
    serviceType: 'EXPRESS',
    estimatedWeight: 1.5,
    items: [
      { id: '9', type: 'SINGLE', name: 'bedsheet', quantity: 2 },
      { id: '10', type: 'SINGLE', name: 'pillow cover', quantity: 4 }
    ]
  },
  {
    id: '6',
    orderId: '1937',
    customerName: 'Lisa Anderson',
    phoneNumber: '8197739444',
    status: 'PICKUP',
    priority: 'HIGH',
    location: {
      latitude: 17.4600,
      longitude: 78.4000,
      address: 'Ameerpet, Hyderabad'
    },
    dropLocation: {
      latitude: 17.4650,
      longitude: 78.4050,
      address: 'SR Nagar, Hyderabad'
    },
    scheduledTime: '2024-03-15T17:00:00Z',
    specialInstructions: 'No contact delivery',
    distance: 1.5,
    serviceType: 'REGULAR',
    estimatedWeight: 2.8,
    items: [
      { id: '11', type: 'PAIR', name: 'uniforms', quantity: 3 },
      { id: '12', type: 'SINGLE', name: 'jacket', quantity: 1 }
    ]
  }
];