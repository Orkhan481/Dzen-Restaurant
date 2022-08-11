import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const BookingForm = () => {

    // RESERVE BUTTON

    // const btn = document.querySelector("#reserve-btn");
    // const info = document.querySelector(".information");

    // btn.addEventListener("click",submitForm);

    // function submitForm(){
    //     let message = document.createElement("div");
    //     message.innerHTML="Message sended";
    //     info.appendChild(message);
    // }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uzugnql', 'template_i794zvd', form.current, 'k3_c03PZF_WlQK8Y8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <section className="reservation">

                <div className="reservation-banner">
                    <h1 className='md-text'>Бронирование</h1>

                    <form ref={form} onSubmit={sendEmail}>
                        <div className="information">

                            <div className="personal-information">
                                <div className="input-area">
                                    <label >Имя</label>
                                    <input type="text" id="name" />
                                </div>

                                <div className="input-area">
                                    <label htmlFor="">Телефон</label>
                                    <input type="tel" id="mobile" />
                                </div>

                            </div>

                            <div className="reservation-date">

                                <div className="input-area">
                                    <label >Кол-во</label>
                                    <input type="number" id="number" />
                                </div>

                                <div className="input-area">
                                    <input type="date" id="date" />
                                </div>

                                <div className="input-area">
                                    <label >Время</label>
                                    <input type="time" id="time" />
                                </div>

                            </div>
                            <button className='btn yellow-btn sm-text' id="reserve-btn">Заказать столик</button>
                        </div>
                        </form>

                </div>
            </section>
        </>
    )
}

export default BookingForm