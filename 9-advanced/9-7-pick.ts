{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
//좀 더 제한적인 이용을 할 때, pick 을 사용 
  type VideoMetadata = Pick<Video, 'id' | 'title'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id: id,
      title: 'title',
    };
  }
}
