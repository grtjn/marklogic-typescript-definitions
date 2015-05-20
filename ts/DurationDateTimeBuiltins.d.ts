// Type definitions for DurationDateTimeBuiltins
// Definitions: 

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
    yearsFromDuration(arg: Object): Number;

    /** Returns an xs:integer representing the months component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    monthsFromDuration(arg: Object): Number;

    /** Returns an xs:integer representing the days component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    daysFromDuration(arg: Object): Number;

    /** Returns an xs:integer representing the hours component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromDuration(arg: Object): Number;

    /** Returns an xs:integer representing the minutes component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromDuration(arg: Object): Number;

    /** Returns an xs:decimal representing the seconds component in the canonical lexical representation of the value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromDuration(arg: Object): Number;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    yearFromDateTime(arg: Date): Number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthFromDateTime(arg: Date): Number;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    dayFromDateTime(arg: Date): Number;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromDateTime(arg: Date): Number;

    /** Returns an xs:integer value between 0 and 59, both inclusive, representing the minute component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromDateTime(arg: Date): Number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromDateTime(arg: Date): Number;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromDateTime(arg: Date): Object;

    /** Returns an xs:integer representing the year component in the localized value of $arg. The result may be negative. If $arg is the empty sequence, returns the empty sequence. **/
    yearFromDate(arg: Object): Number;

    /** Returns an xs:integer between 1 and 12, both inclusive, representing the month component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    monthFromDate(arg: Object): Number;

    /** Returns an xs:integer between 1 and 31, both inclusive, representing the day component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    dayFromDate(arg: Object): Number;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromDate(arg: Object): Object;

    /** Returns an xs:integer between 0 and 23, both inclusive, representing the value of the hours component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    hoursFromTime(arg: String): Number;

    /** Returns an xs:integer value between 0 to 59, both inclusive, representing the value of the minutes component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    minutesFromTime(arg: String): Number;

    /** Returns an xs:decimal value between 0 and 60.999..., both inclusive, representing the seconds and fractional seconds in the localized value of $arg. Note that the value can be greater than 60 seconds to accommodate occasional leap seconds used to keep human time synchronized with the rotation of the planet. If $arg is the empty sequence, returns the empty sequence. **/
    secondsFromTime(arg: String): Number;

    /** Returns the timezone component of $arg if any. If $arg has a timezone component, then the result is an xs:dayTimeDuration that indicates deviation from UTC; its value may range from +14:00 to -14:00 hours, both inclusive. Otherwise, the result is the empty sequence. If $arg is the empty sequence, returns the empty sequence. **/
    timezoneFromTime(arg: String): Object;

    /** Adjusts an xs:dateTime value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:dateTime without a timezone. Otherwise, returns an xs:dateTime with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then the result is an xs:dateTime value with a timezone component of $timezone that is equal to $arg. **/
    adjustDateTimeToTimezone(arg: Date, timezone?: Object): Date;

    /** Adjusts an xs:date value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:date without a timezone. Otherwise, returns an xs:date with a timezone. For purposes of timezone adjustment, an xs:date is treated as an xs:dateTime with time 00:00:00. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with 00:00:00 for the time component and date and timezone components that are the same as the date and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a date value that has date and timezone components that are the same as the date and timezone components of $r. **/
    adjustDateToTimezone(arg: Object, timezone?: Object): Object;

    /** Adjusts an xs:time value to a specific timezone, or to no timezone at all. If $timezone is the empty sequence, returns an xs:time without a timezone. Otherwise, returns an xs:time with a timezone. If $timezone is not specified, then $timezone is the value of the implicit timezone in the dynamic context. If $arg is the empty sequence, then the result is the empty sequence. A dynamic error is raised [err:FODT0003] if $timezone is less than -PT14H or greater than PT14H or if does not contain an integral number of minutes. If $arg does not have a timezone component and $timezone is the empty sequence, then the result is $arg. If $arg does not have a timezone component and $timezone is not the empty sequence, then the result is $arg with $timezone as the timezone component. If $arg has a timezone component and $timezone is the empty sequence, then the result is the localized value of $arg without its timezone component. If $arg has a timezone component and $timezone is not the empty sequence, then: Let $srcdt be an xs:dateTime value, with an arbitrary date for the date component and time and timezone components that are the same as the time and timezone components of $arg. Let $r be the result of evaluating fn:adjust-dateTime-to-timezone($srcdt, $timezone) The result of this function will be a time value that has time and timezone components that are the same as the time and timezone components of $r. **/
    adjustTimeToTimezone(arg: String, timezone?: Object): String;


  }
  interface xdmp {

    /** Returns an xs:integer between 1 and 4, both inclusive, calculating the quarter component in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    quarterFromDate(arg: Object): Number;

    /** Returns an xs:integer between 1 and 53, both inclusive, representing the week value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    weekFromDate(arg: Object): Number;

    /** Returns an xs:integer between 1 and 366, both inclusive, representing the yearday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    yeardayFromDate(arg: Object): Number;

    /** Returns an xs:integer between 1 and 7, both inclusive, representing the weekday value in the localized value of $arg. If $arg is the empty sequence, returns the empty sequence. **/
    weekdayFromDate(arg: Object): Number;


  }
  interface sql {


  }
}
