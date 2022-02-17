# Technical Task - Alexandre castro

## Task description

In this task we are automating the following scenarios

### First Scenario

1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Validate that there is exactly 1 'QA Automation Engineer' role open

### Second scenario

1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Select “QA” from “All departments” dropdown.
4. Validate that each result contains "QA Automation" or “QA Engineer” in the title

## Running the Tests

First install dependences with 

```
yarn
```

Run cypress tests with 

```
yarn cypress:open
```

Run cypress tests in headless mode with 

```
yarn cypress:run
```