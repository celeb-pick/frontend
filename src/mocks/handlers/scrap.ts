import { http, HttpResponse } from 'msw';

export const mockScrapOutfitPost = http.post(
  '/api/outfit-posts/:id([0-9]+)/scraps/',
  () => {
    return HttpResponse.json({}, { status: 201 });
  }
);

export const mockUnscrapOutfitPost = http.delete(
  '/api/outfit-posts/:id([0-9]+)/scraps/',
  () => {
    return HttpResponse.json({}, { status: 200 });
  }
);

export const mockScrapOutfitItem = http.post(
  '/api/outfit-items/:id([0-9]+)/scraps/',
  () => {
    return HttpResponse.json({}, { status: 201 });
  }
);

export const mockUnscrapOutfitItem = http.delete(
  '/api/outfit-items/:id([0-9]+)/scraps/',
  () => {
    return HttpResponse.json({}, { status: 200 });
  }
);
