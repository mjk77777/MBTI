const url = 'https://mbtislove.netlify.app/';

function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '십이간지 연애유형 결과';
  const shareDesc = infoList[resultAlt].name;
  const shareImg= url + 'img/image-' + resultAlt +'.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

      Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
              title: shareTitle,
              description: shareDesc,
              imageUrl:
              shareImg,
              link: {
                  mobileWebUrl:shareURL,
                  webUrl: shareURL
                    },
          },

          buttons: [
          {
          title: '결과확인하기',
          link: {
              mobileWebUrl: shareURL,
              webUrl: shareURL
          },
          },

          ],
          });
          }





function kakaoShare(){
        Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
      title: '오늘의 디저트',
      description: '아메리카노, 빵, 케익',
      imageUrl:
      'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
      },
      },
      itemContent: {
      profileText: 'Kakao',
      profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      titleImageText: 'Cheese cake',
      titleImageCategory: 'Cake',
      items: [
      {
      item: 'Cake1',
      itemOp: '1000원',
      },
      {
      item: 'Cake2',
      itemOp: '2000원',
      },
      {
      item: 'Cake3',
      itemOp: '3000원',
      },
      {
      item: 'Cake4',
      itemOp: '4000원',
      },
      {
      item: 'Cake5',
      itemOp: '5000원',
      },
      ],
      sum: '총 결제금액',
      sumOp: '15000원',
      },
      social: {
      likeCount: 10,
      commentCount: 20,
      sharedCount: 30,
      },
      buttons: [
      {
      title: '웹으로 이동',
      link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
      },
      },
      {
      title: '앱으로 이동',
      link: {
      mobileWebUrl: 'https://developers.kakao.com',
      webUrl: 'https://developers.kakao.com',
      },
      },
      ],
      });
  }
