import React, { Component } from 'react';
import dateFns from 'date-fns';

class Calendar extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    renderHeader() {}

    renderDays() {}

    renderCells() {}

    onDateClick = day => {}

    nextMonth = () => {}

    prevMonth = () => {}

    render() {
        return(
            <div>
                {this.renderHeader()}
                {this.renderDays()}
                {this.}
            </div>
        )
    }
}

export default Calendar;