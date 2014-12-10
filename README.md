# Bootstrap 3 Alerts

## Introduction

A very basic extension to Bootstrap 3 alerts which I built to help display ajax response statuses in a suitable manner. Alerts can be called via jquery and will display nicely on the page, including multiple alerts at a time.

## Usage

```
$('#myBtn').click(function() {
    $(document).alert("danger", "<strong>Danger</strong> You have produced an alert!");
});
```

## Options

`$(document).alert(status, message, duration)`

`status` - A bootstrap status type/class (success, warning, danger, info).
`message` - The message to display. Can include HTML.
`duration` `default: 3000ms` - How long the alert shows for in `ms`.

## Creator

**Jonathan Lambert**

- <https://twitter.com/jonnerz_>
- <https://github.com/jonnerz>
