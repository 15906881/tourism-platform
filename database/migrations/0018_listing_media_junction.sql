CREATE TABLE IF NOT EXISTS core.listing_media (
  listing_id UUID NOT NULL REFERENCES core.listings(id) ON DELETE CASCADE,
  media_id UUID NOT NULL REFERENCES core.media(id) ON DELETE CASCADE,
  position INT NOT NULL DEFAULT 0,
  PRIMARY KEY (listing_id, media_id)
);

CREATE INDEX IF NOT EXISTS listing_media_by_listing ON core.listing_media(listing_id, position);

GRANT SELECT, INSERT, UPDATE, DELETE ON core.listing_media TO app_user;
