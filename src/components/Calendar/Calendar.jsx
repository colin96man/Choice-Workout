import * as React from 'react';
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const Frame = styled.div`
    width: 400px;
    border: 1px solid #131D47;
    box-shadow: 2px 2px 2px #eee;
`;

const Header = styled.div`
    font-size: 18px;
    font-weight: bold;
    padding: 10px 10px 5px 10px;
    display: flex;
    justify-content: space-between;
    background-color: #131D47;
`;

const Button = Styled.div`
    cursor: pointer;
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${props =>
        props.isToday &&
        css`
      border: 1px solid #eee;
    `}

  ${props =>
        props.isSelected &&
        css`
      background-color: #eee;
    `}
`;

export function Calendar() {
    const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const DaysOfTheWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today = new Date();
    const [date, setDate] = useState(today);
    const [day, setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [startDay, setStartDay] = useState(calculateStartDayOfMonth(date));

    useEffect(() => {
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setStartDay(calculateStartDayOfMonth(date));
    }, [date]);


    return (
        <div></div>
    )
}