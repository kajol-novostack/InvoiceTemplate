import React from 'react'
import styles from './invoice.module.css'
import Link from 'next/link'


export const Invoice = () => {
    return (
        <div>
            <section>
                <div className={styles["head"]}>
                    <div className={styles["left-head"]}>
                        <span>Invoice</span>
                    </div>
                    <div className={styles["right-head"]}>
                        <h2>Your Company Name</h2>
                        <ul>
                            <li>Your Business Address</li>
                            <li>City</li>
                            <li>Country</li>
                            <li>Postal</li>

                        </ul>

                    </div>
                </div>

                <div>
                    <div className={styles["main"]}>

                        <div className={styles["left-main"]}>
                            <p>Bill To:</p>
                            <h2>Company Name</h2>
                            <ul>
                                <li>Address</li>
                                <li>City</li>
                                <li>Country</li>
                                <li>Postal</li>

                            </ul>
                        </div>

                        <div className={styles["right-main"]}>

                            <h3>INVOICE #</h3>
                            <span>0000001</span>
                            <h3> DATE</h3>
                            <span>12/31/20</span>
                            <h3>INVOICE DUE DATE</h3>
                            <span>12/31/20</span>
                        </div>
                    </div>

                    <hr />

                    <table>
                        <thead>
                            <tr className={styles["table-headers"]}>
                                <th>ITEMS</th>
                                <th>DESCRIPTION</th>
                                <th colSpan={4}></th>
                                <th className={styles["center"]}>QUANTITY</th>
                                <th className={styles["center"]}>PRICE</th>
                                <th className={styles["center"]}>TAX</th>
                                <th className={styles["center"]}>AMOUNT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>

                            <tr>
                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>

                            <tr>
                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>

                            <tr>
                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>

                            <tr>
                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>

                            <tr>
                                <td>Item 1</td>
                                <td>Description</td>
                                <td colSpan={4}></td>
                                <td className={styles["center"]}>1</td>
                                <td className={styles["center"]}>$0</td>
                                <td className={styles["center"]}>$0%</td>
                                <td className={styles["center"]}>$0000.00</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


                <div className={styles["mainbox"]}>
                    <div className={styles["box1"]}>
                        <div className={styles["p-style"]}>
                            <p>NOTES:</p>
                        </div>
                        <div className={styles["style-span"]}>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nemo eligendi inventore? Provident iste cumque
                            </span>
                        </div>

                    </div>

                    <div className={styles["box2"]}>
                        <div className={styles["p-style"]}>
                            <p>TOTAL</p>
                        </div>
                        <div className={styles["dollar"]}>
                            <h1>$00000.00</h1>
                        </div>
                    </div>

                </div>

                <div className={styles["lastpart"]}>
                    <div className={styles["lastpart-span"]}>
                        <span>Powered by <strong>wave</strong></span>
                    </div>

                    <div className={styles["lastpart-p"]}>

                        <p>
                            This invoice was generated with the help of Wave Financial Inc.
                            To learn more, and create your own free account visit <Link href="">waveapps.com</Link></p>


                    </div>
                </div>

            </section>

        </div>
    )
}
