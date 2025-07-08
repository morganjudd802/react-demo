import {type ChangeEvent, useEffect, useState} from 'react';
import './CartDemo.scss';

export type Item = {
    id: number;
    name: string;
    quantity: number;
}

const initialItems: Item[] = [
    { id: 1, name: 'T-Shirt', quantity: 0 },
    { id: 2, name: 'Jeans', quantity: 0 },
    { id: 3, name: 'Shoes', quantity: 0 }
];

export const CartDemo = () => {
    const useItemQuantityUpdater = () => {
        // Get items from session storage OR set items to initial items array
        const getCart = () => {
            const cartData = sessionStorage.getItem('cart');
            if (cartData) {
                return JSON.parse(cartData) as Item[];
            }
            return initialItems;
        };

        // Set state hooks for items and totalItems
        const [items, setItems] = useState<Item[]>(getCart());
        const [totalItems, setTotalItems] = useState(0);

        // Update displayed total when items change
        useEffect(() => {
            const newTotal = items.reduce((sum, item) => sum + item.quantity, 0);
            setTotalItems(newTotal);
            sessionStorage.setItem('cart', JSON.stringify(items));
        }, [items]);

        // Increase item quantity by 1
        const increment = (id: number) => {
            const item = items.find(item => item.id === id);
            if (item) {
                item.quantity++;
                setItems([...items]);
            }
        }

        // Decrease item quantity by 1
        const decrement = (id: number) => {
            const item = items.find(item => item.id === id);
            if (item) {
                if (item.quantity !== 0) {
                    item.quantity--;
                    setItems([...items]);
                }
            }
        }

        // Set item quantity to user entered value
        const setQuantity = (id: number, quantity: number) => {
            if(quantity >= 0) {
                const item = items.find(item => item.id === id);
                if (item) {
                    item.quantity = quantity;
                    setItems([...items]);
                }
            }
        }

        return {items, totalItems, increment, decrement, setQuantity};
    }

    // Component references
    const { items, totalItems, increment, decrement, setQuantity } = useItemQuantityUpdater();
    const handleQuantityChange= (id: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value) || 0;
        setQuantity(id, value);
    }

    return (
        <>
            <h4>Cart Example:</h4>
            <span>This example utilizes a custom state hook, utilizing <code>useState</code> to:</span>
            <ul>
                <li>Get items stored in the session</li>
                <li>Update an object quantity based on its object id</li>
                <li>Save items to the session</li>
                <li>Disable controls based on state</li>
            </ul>
            <div className={'cart-container'}>
                <h4>Total Items: {totalItems}</h4>
                <div className={'item-list-container'}>
                    {items.map(item => (
                        <div key={item.id} className={'item-container'}>
                            <span className={'item-name'}>{item.name}</span>
                            <div className={'cart-controls'}>
                                <button className={'quantity-button'}
                                        disabled={item.quantity === 0}
                                        onClick={decrement.bind(null, item.id)}>
                                    -
                                </button>
                                <input onChange={handleQuantityChange(item.id)}
                                       className={'short-input'}
                                       value={item.quantity}
                                       type='number' />
                                <button className={'quantity-button'}
                                        onClick={increment.bind(null, item.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}