from sqlmodel import Session, create_engine

from module.conf import DATA_PATH

engine = create_engine(DATA_PATH)

db_session = Session(engine)
