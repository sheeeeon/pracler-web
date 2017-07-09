# pracler-web

pracler 공식 홈페이지입니다. Node.js 기반이며 api 서버단 코드는 포함되어 있지 않습니다.

## 소개

pracler는 사용자 간 음악 감상 정보를 분석하고 공유할 수 있는 어플리케이션입니다.

## 주요 기능

작성일 기준 210개의 음악이 등록되어 있으며 대부분 Youtube 또는 Soundcloud를 통해 감상할 수 있습니다.

감상한 음악의 히스토리 관리가 가능합니다. 히스토리를 기준으로 사용자가 감상한 음악의 통계를 제공합니다. 현재 *가장 많이 들은 앨범/아티스트*의 형태로 제공됩니다.

음악의 정보를 확인할 수 있습니다. markdown 형식을 이용하여 누구나 자유롭게 수정 변경이 가능합니다.

노래방 예약 시스템처럼, Youtube를 통해 재생 중 끝나는 경우 미리 *현재 재생중인 목록*에 곡을 추가한 경우 그 곡으로 자동으로 넘어갑니다.

로그인 시 보안 패치가 되어 있습니다. 안전한 전송이 가능합니다.

pracler 안드로이드 플랫폼에서 재생된 음악들을 자동으로 pracler 데이터베이스에 등록합니다.



## Running Locally

아래 코드로 웹을 실행할 수 있습니다.

```sh
$ cd pracler-web
$ npm install
$ npm start
```

하지만 api 서버 코드가 포함되어 있지 않으므로 사용에 많은 제한이 있을 것입니다.

개인 프로젝트이고 라즈베리파이를 이용한 외부접속 전용 서버를 만드는 도중 홈 네트워크 통신사 측에서 80번 포트를 허용하고 있지 않으므로,
개발의 편의를 위해 웹은 5000 포트를 사용하고 있습니다.

아래 주소로 접속할 수 있습니다. 하지만 위에서 말씀드렸다시피 홈 네트워크 사정에 의해 예고 없이 접속 불가능한 상태가 될 수 있습니다.

http://pracler.icaynia.com:5000/

혹시 접속 불가능한 상태일 때 프로젝트를 확인하고 싶으시다면 icaynia@icaynia.com으로 메일 부탁드립니다.

