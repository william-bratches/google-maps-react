# Installation
Run `yarn install`.

Run `sudo cp .env.example .env`

Fill in your GOOGLE_KEY and GOOGLE_[whatever] in the .

# Running the app
Run `yarn start`. The app will be available at port 3000.

# A note on structure
Normally I like to separate stateful "controller" components from hydrating stateless "view" components. The google maps initialization flow made this less elegant that I would liked it to have been, since the service initialization is dependent on a DOM ready event being fired. To bubble up local map state to the redux state back down to a "stateless" map view again would have been extremely redundant. Thus, the map component is less elegant that I would have liked. Maybe with more time I could have come up with a better solution...
