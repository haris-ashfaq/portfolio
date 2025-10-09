import React, { useState } from 'react';

function Generateotp() {
    const [otp, setOtp] = useState('');

    const generateOtp = () => {
        let generatedOtp = '';
        for (let i = 0; i < 6; i++) {
            generatedOtp += Math.floor(Math.random() * 10);
        }
        setOtp(generatedOtp);
    };

    return (
        <div>
            <h2>OTP Generator</h2>
            <button onClick={generateOtp}>Generate OTP</button>
            {otp && <p>Generated OTP: <strong>{otp}</strong></p>}
        </div>
    );
}

export default Generateotp;