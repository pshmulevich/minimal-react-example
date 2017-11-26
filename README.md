Minimal React Maven Project
=============
This is a template for building React.js web apps **without browserify, babel, and JSX**.
Main problem is not wanting the added complexity of using node.js which would entail a complex build system even for a lightweight project. This project is to demonstrate an easy way to work without a build system directly.

# Instructions:

##1: Create a new maven project with Eclipse (make sure to check "skip archetype selection" box)

##2:  Update pom.xml:

###A: Add spring-boot-starter-parent:
```
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.6.RELEASE</version>
</parent>
```

###B: Add the following dependencies:
```
<!-- Important, to enable Spring-Boot web project -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<!-- To enable Spring-Boot tests -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

###B: Add spring-boot-maven-plugin to the build section:
```
<!-- This creates a proper Spring-Boot runnable jar -->
<plugin>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-maven-plugin</artifactId>
</plugin>
```

##3: Update Project
* right click on the project, select Maven->Update Project for all pom.xml settings to take effect

##4: Add other project files:

The bare minimum files you will need to have:

`index.html` (in the browser to use)
`main.js`,
`README.md`,
`pom.xml`, 
`Application.java`,
`Application.properties`
* in the body of the html file, write some text to see it



##4: Run project
* open command window
* cd into your project directory
* run the project with the following command:
  * `mvn clean package spring-boot:run`

##5: View result
* go to the browser and enter the url `http://localhost:8080/index.html`
* on a mostly-blank page, you will see the test text you wrote in index.html


##Special note:
In case the program ceases to display because you are refreshing the browser, it may be because the hard reload has trigerred some security feature of the page's connection. You will need to import the js files you'll need to make the page work:

### Step 1: Create a folder for the react files needed.
### Step 2: Download the files from here https://react-cn.github.io/react/downloads.html and put them in the folder
### Step 3: Go to index.html and update the src files

## Additional resources:
https://github.com/shinglyu/minimal-react

