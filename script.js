$(document).ready(function () {
  var toolDiv = $("#hdtb-msb > div:nth-child(2)")

	var insertYearElement = document.createElement('a')
	insertYearElement.setAttribute('class', 'hdtb-tl')
  insertYearElement.setAttribute('href', document.URL + '&tbs=qdr:y')
  insertYearElement.textContent = "一年以内"

	var insertMonthElement = document.createElement('a')
	insertMonthElement.setAttribute('class', 'hdtb-tl')
  insertMonthElement.setAttribute('href', document.URL + '&tbs=qdr:m')
  insertMonthElement.textContent = "一ヶ月以内"

	var insertWeekElement = document.createElement('a')
	insertWeekElement.setAttribute('class', 'hdtb-tl')
  insertWeekElement.setAttribute('href', document.URL + '&tbs=qdr:w')
  insertWeekElement.textContent = "一週間以内"

  toolDiv.after(insertWeekElement)
  toolDiv.after(insertMonthElement)
	toolDiv.after(insertYearElement)
});
