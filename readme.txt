### This porject is develop to manage store
### new project
npm i -g create-react-app
create-react-app [my-app] --template typescript
npx create-react-app [my-app] --template typescript (create poject by last version)

######## Development & Production #########
- create a 2 files as bellow:
1) [.env.development] (If we run it by 'yarn start' or 'npm start', a app will use development mode)
2) [.env.production] (If we build it by 'yarn build' or 'npm build', a app will use production mode)
- Remark: every values in 2 files are string type

#####Design Button Grident#######
https://mui.com/system/styles/basics/

### install package
npm i @emotion/react @emotion/styled
npm i @mui/icons-material @mui/material @mui/x-data-grid chart.js react-chartjs-2 
npm i @react-hook/debounce
npm i react-router-dom @types/react-router-dom
npm i axios 
npm i formik formik-material-ui yup react-hook-form @hookform/resolvers
npm i moment react-moment url-join react-number-format
npm i @types/redux-logger react-redux redux redux-logger redux-thunk url-join @types/url-join react-iframe
--change redux-thunk to redux-toolkit
ືnpm i @reduxjs/toolkit react-redux redux-logger
yarn add @mui/x-data-grid react-moment recharts @mui/x-data-grid-generator
yarn add @mui/styles
----barcode scanner
yarn add use-scan-detection (A react hook for detecting barcode scanners in the DOM.)
yarn add react-spinners (Loading spinner)

######Carousel#######
visit: https://flickity.metafizzy.co/
package Install: https://www.npmjs.com/package/flickity
https://www.youtube.com/watch?v=zxqGOgsgUtk
https://www.youtube.com/watch?v=JpQNITd35MY
npm i flickity


###Change datagrid color and background in MUI#####
https://mui.com/x/react-data-grid/style/#styling-rows

##### Test typescript ####
https://www.typescriptlang.org/play?#code/FAGwpgLgBArgzmATlAvFARAKQIYDsxQCqCi6A3MMAMYD2ucN4AdCDQOYAU8SAlEA

####Customize NavLink####
https://stackoverflow.com/questions/71350481/react-router-dom-v6-navlink-and-mui-listitem-not-working-with-classname
https://reactrouter.com/en/main/components/nav-link

####uninstall package
- npm 
npm uninstall <package_name>
npm uninstall --save react-bootstrap
- Or yarn
yarn remove <package...>

###Page components
cd src/components/pages
yarn add global create-react-component-folder
npx crcf -f --notest --typescript LoginPage RegisterPage (create folder as pages)

### start project
npm start
or
yarn start

### Generate Typescript Function###
 tsrfc (Generate typescript function)
 rxconst (to Generate constants variable on constants file)
 rxaction (Generate action file)
 rxreducer (Generate reducer)

###### Reducer State Circle######
1. UI(triggers) => 2. Action(send to) => 3. Reducer(updates) => 4. Store(contains) => 5. State(define) => 1. UI(triggers)

### Compare normal & async or Promise
-normal
 axios.post("http://192.168.0.16:8085/api/v2/authen/register", values)
                .then((result) => {
                  alert(JSON.stringify(result.data));
                  // setTimeOut to delay on submit
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 2000);
                });

- async
const result = await axios.post(
                "http://192.168.0.16:8085/api/v2/authen/register",
                values
              );
              alert(JSON.stringify(result.data));
              console.log(JSON.stringify(result.data));


#######SEO of NextJS(SSR), ######
NextJS is a framework of ReactJS

########Notification########
MQTT (to notify or event-listener base commication)
