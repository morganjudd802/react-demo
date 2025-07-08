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
        const [items, setItems] = useState<Item[]>(initialItems);

        useEffect(() => {
            getCart();
        }, []);

        const increment = (id: number) => {
            const item = items.find(item => item.id === id);
            if (item) {
                item.quantity++;
                setItems([...items]);
                setCart();
            }
        }

        const decrement = (id: number) => {
            const item = items.find(item => item.id === id);
            if (item) {
                if (item.quantity !== 0) {
                    item.quantity--;
                    setItems([...items]);
                }
                setCart();
            }
        }

        const setQuantity = (id: number, quantity: number) => {
            if(quantity >= 0) {
                const item = items.find(item => item.id === id);
                if (item) {
                    item.quantity = quantity;
                    setItems([...items]);
                }
                setCart();
            }
        }

        const getCart = () => {
            const cartItems = sessionStorage.getItem('cart');
            if(cartItems) {
                setItems(JSON.parse(cartItems));
            }
        }

        const setCart = () => {
            sessionStorage.setItem('cart', JSON.stringify(items));
        }

        return {items, increment, decrement, setQuantity};
    }

    const { items, increment, decrement, setQuantity } = useItemQuantityUpdater();
    const handleQuantityChange= (id: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(event.target.value) || 0;
        setQuantity(id, val);
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
                <h4 data-testid="total">Total Items: </h4>
                <div className={'item-list-container'}>
                    {items.map(item => (
                        <div key={item.id} data-testid={`item-${item.id}`} className={'item-container'}>
                            <span className={'item-name'}>{item.name}</span>
                            <div className={'cart-controls'}>
                                <button className={'quantity-button'}
                                        disabled={item.quantity === 0}
                                        onClick={decrement.bind(null, item.id)}
                                        data-testid={`remove-${item.id}`}>
                                    -
                                </button>
                                <input onChange={handleQuantityChange(item.id)}
                                       className={'short-input'}
                                       value={item.quantity}
                                       type='number' />
                                <button className={'quantity-button'}
                                        onClick={increment.bind(null, item.id)}
                                        data-testid={`add-${item.id}`}>
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