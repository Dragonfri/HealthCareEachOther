# 2차 README  


## 안드로이드 실행 방법  

* 아래와 같이 코드를 로컬로 불러옵니다.
  
```
 git clone
 git fetch origin main
```

  
* 안드로이드 에뮬레이터 설치 후 아래 두 명령어를 실행해 yarn을 통해 안드로이드 앱을 실행합니다.

```
 yarn install
 yarn android
```

* 코드 수정 후 앱을 리로드 하고 싶다면 yarn 설정 창에 r을 클릭


## 버전 정보

**node -> v18.15.0.**  
**yarn -> 1.22.19**  
**android api -> android api 33 or android 11.0**  
**react-native-cli -> 11.3.6**  

## branch 규칙  

**branch 생성시 꼭 무슨 작업을 하는 branch인지 명시할 것. ex) 알림 기능을 넣는 branch -> feature/alarmMade**  
**위와 같이 branch 명은 항상 feature/ 로 시작할 것.**  


## commit 규칙  

**commit 시 꼭 어떤 작업을 완료했는지 혹은 진행 중인지 명시할 것. ex) 그룹 생성에서 그룹 카테고리 분류 완료 -> commit -m "d 그룹 카테고리 분류"**  

1. 개발 작업 완료 -> "d 작업명"
2. 버그 fix -> "bf 어떻게 고쳤는지"
3. 개발 작업 진행 중 -> "g 작업명"
4. 기능 삭제 -> "r 삭제한 기능"
5. 문서 수정 -> "doc 수정한 내용"
6. 코드 리팩토링 -> "ref 수정한 내용"
