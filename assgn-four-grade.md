# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |     |
| ----------------------------------------------------- | ------ | --- |
| DB                                                    |        |     |
| - neondb created                                      | 10     | 10  |
| Routes                                                |        |     |
| - api CRUD endpoints added for orders                 | 10     | 10  |
| Server                                                |        |     |
| - sequelize or mongo dependencies added               | 10     | 10  |
| - successfully connect to db                          | 10     | 10  |
| Create Database Objects Definitions                   |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |
| Change your service classes use your Database objects |        |     |
| - User                                                | 10     | 10  |
| - Product                                             | 10     | 10  |
| - Order                                               | 10     | 10  |

## Total Score: 100 / 100

This is excellent work.  I am very impressed. 

One thing.   Took me a second to figure out why I couldn't post a user.
In the model you include the id.   This is fine but if you do that you
need to ensure that the value being set is unique. Don't rely on the client
for this.

Either remove the id from the model and let sequelize generate it for you or
create the unique id in the services using something like uuid().







