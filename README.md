# movieql

## Graph QL 해결할 수 있는 두가지 문제

### Over-fetching
모든 user 이름을 보여주고 싶음.
/users/ GET

users 에서 사용자 명만 주는게 아니라 성이나 프로필 사진도 줄거임.  Database 에 내가 사용하지 않을 영역을 요청하는 방식은 비효율적.
처음 GET 을 쓸 때는 프로필사진과 성을 사용안하고 사용자명만 필요함. 나중에 필요할땐 부를텐디...
이걸 Over-fetching 이라 함. 내가 요청한 영역의 정보보다 더 많은걸 받음. 

### Under-fetching
어떤 하나를 완성하기 위해 니가 부가적인 다른 Request를 할 때 발생함. 인스타그램에서
/feed/
/notifications/
/user1/ 3가지 요청이 가고나서야 앱이 시작됨.
REST 에서 하나를 완성하려고 많은 소스를 요청함...
이것도 GraphQL 이 해결할 수 있는 문제임.
한 query 에서 원하는 정보만큼 받아올 수 있음.
GraphQL 에는 URL 은 존재하지도 않음. 하나의 endPoint 만 있음.

GraphQL Backend에 보내는 쿼리
```graphql
query {
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        username
        profilePic
    }
}
```

Server 에서 보낸 JSON
```javascript
{
    feed: [
        {
            comments:1,
            likeNumber:20
        }
    ],
    notifications: [
        {
            isRead: true
        },
        {
            isRead: false
        }
    ],
    user: {
        username: "nico",
        profile: "http:"
    }
}
```
이걸 GraphQL Backend 에 보내면 
네가 요청한 정보들만 받을 수 있고 원하는 방식으로 조정할 수도 있음. API 로 조정하거나 여러가질 섞어서 모양을 바꾸거나 할 수 있음.

## 실습 시작

```bash
$ mkdir movieql
$ cd movieql
$ yarn init

// graphql 서버를 쉽게 만들 수 있는 startup 패키지?
$ yarn add graphql
$ yarn add graphql-yoga@alpha

// 엄청 감단하고 네가 파일을 수정할 때마다 서버를 재시작 해줌.
$ yarn global add nodemon

// babel 설치
yarn add @babel/cli --dev
yarn add @babel/core --dev

// preset 으로 env 를 설치. (가장 기본적으로 ES6 지원을 위한 preset 이라 보믄됨)
yarn add @babel/preset-env --dev

yarn add @babel/node --dev
echo '{"presets": ["@babel/preset-env"]}' > babel.config.json
```

package json 에서 nodemon 사용하고 babel-node 로 컴파일하는 script 추가
```json
"scripts": {
    "start": "nodemon --exec babel-node index.js"
  },
```

```bashrc
yarn start
```