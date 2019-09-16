from random import choice
from datetime import datetime

years = [2019]
months = [x for x in range(1,10)]
days = [x for x in range(1,31)]
hours = [x for x in range(10,19)]
minutes = [x for x in range(0,60)]
seconds = [x for x in range(0,60)]
microseconds = [x for x in range(0,3000,500)]

dates = []
for i in range(10):
    dates.append(str(datetime(
        choice(years),
        choice(months),
        choice(days),
        choice(hours),
        choice(minutes),
        choice(seconds),
        choice(microseconds)
    )))

print(dates)
