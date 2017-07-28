# Installation
Run `yarn install`.

The google API key in the .env is a public one provided by react-google-maps. Feel free to fill in your own.

# Running the app
Run `yarn start`. The app will be available at port 3000.

# Future additions
I unfortunately lacked the time to give this app a professional UX polish.
Things I want to add:
* Can trigger places query by pressing enter button
* Click on a list item highlights markerData
* Query bar stays in chart views (need to rethink google map initialization flow...)
* More advanced chart features (highlighting, tooltip drilldown)
* Better, more creative visualizations in general
* Better error handling (i.e. highlighting red in field, instead of annoying alert)
* Figure out more consistent naming scheme between actions and reducers
* Alphabetize objects, code naming details
* Better visual design (I am admittedly not a UX designer)
* CSS stylesheet is pretty basic. Ideally, it would be SASS (or CSS4! that composites multiple classes.
