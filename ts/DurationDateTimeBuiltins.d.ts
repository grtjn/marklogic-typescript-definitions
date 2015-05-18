// Type definitions for DurationDateTimeBuiltins
// Definitions: /Users/gjosten/Projects/github-grtjn/marklogic-typescript-definitions/xml/DurationDateTimeBuiltins.xml

/**
The duration, date, and time built-in functions are XQuery functions
that operate on duration-, date-, and time-related values.
They are defined in
XQuery 1.0
and XPath 2.0 Functions and Operators.
**/

declare module DurationDateTimeBuiltins {

  interface fn {

    /** Returns an xs:integer representing the years component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    yearsFromDuration(arg: duration): number;

    /** Returns an xs:integer representing the months component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    monthsFromDuration(arg: duration): number;

    /** Returns an xs:integer representing the days component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    daysFromDuration(arg: duration): number;

    /** Returns an xs:integer representing the hours component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromDuration(arg: duration): number;

    /** Returns an xs:integer representing the minutes component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromDuration(arg: duration): number;

    /** Returns an xs:decimal representing the seconds component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromDuration(arg: duration): decimal;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    yearFromDateTime(arg: dateTime): number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthFromDateTime(arg: dateTime): number;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    dayFromDateTime(arg: dateTime): number;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromDateTime(arg: dateTime): number;

    /** Returns an xs:integer value between 0 and 59, both inclusive, representing the minute component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromDateTime(arg: dateTime): number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromDateTime(arg: dateTime): decimal;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromDateTime(arg: dateTime): dayTimeDuration;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    yearFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    dayFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 4, both inclusive, calculating the quarter component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    quarterFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 53, both inclusive, representing the week value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    weekFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 366, both inclusive, representing the yearday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    yeardayFromDate(arg: date): number;

    /** Returns an xs:integer between 1 and 7, both inclusive, representing the weekday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    weekdayFromDate(arg: date): number;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromDate(arg: date): dayTimeDuration;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the value of the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromTime(arg: time): number;

    /** Returns an xs:integer value between 0 to 59, both inclusive, representing the value of the minutes component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromTime(arg: time): number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive, representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromTime(arg: time): decimal;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromTime(arg: time): dayTimeDuration;

    /** Adjusts an xs:dateTime value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:dateTime without a timezone. Otherwise, returns an xs:dateTime with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then the result is an xs:dateTime value with a timezone component of $timezone that is equal to $arg. **/
    adjustDateTimeToTimezone(arg: dateTime, timezone?: dayTimeDuration): dateTime;

    /** Adjusts an xs:date value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:date without a timezone. Otherwise, returns an xs:date with a timezone. For purposes of timezone adjustment, an xs:date is treated as an xs:dateTime with time 00:00:00. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with 00:00:00 for the time component and date and timezone components that are the same as the date and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a date value that has date and timezone components that are the same as the date and timezone components of $r. **/
    adjustDateToTimezone(arg: date, timezone?: dayTimeDuration): date;

    /** Adjusts an xs:time value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:time without a timezone. Otherwise, returns an xs:time with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with an arbitrary date for the date component and time and timezone components that are the same as the time and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a time value that has time and timezone components that are the same as the time and timezone components of $r. **/
    adjustTimeToTimezone(arg: time, timezone?: dayTimeDuration): time;

    /** [0.9-ml only, use the minus operator ( - ) instead] Returns the xdt:yearMonthDuration that corresponds to the difference between the normalized value of $srcval1 and the normalized value of $srcval2. If either argument is the empty sequence, returns the empty sequence. If the normalized value of $srcval1 precedes in time the normalized value of $srcval2, the returned value is a negative duration. **/
    subtractDateTimesYieldingYearMonthDuration(srcval1: dateTime, srcval1: dateTime): yearMonthDuration;

    /** [0.9-ml only, use the minus operator ( - ) instead] Returns the xdt:dayTimeDuration that corresponds to the difference between the normalized value of $srcval1 and the normalized value of $srcval2. If either argument is the empty sequence, returns the empty sequence. If the normalized value of $srcval1 precedes in time the normalized value of $srcval2, then the returned value is a negative duration. **/
    subtractDateTimesYieldingDayTimeDuration(srcval1: dateTime, srcval1: dateTime): dayTimeDuration;

    /** Returns an integer that represents the specified datepart of the specified date. If datepart or date is the empty sequence, the function returns the empty sequence. **/
    datepart(datepart: string, date: genericDateTimeArg): number;

    /** Returns the count (signed integer) of the specified datepart boundaries crossed between the specified startdate and enddate. **/
    datediff(datepart: string, startdate: any, enddate: any): number;

    /** Returns a specified date with the specified number interval (signed integer) added to a specified datepart of that date **/
    dateadd(datepart: string, number: number, date: any): item()
;


  }
}
