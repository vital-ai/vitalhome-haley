
from vital_ai_vitalsigns.model.properties.BooleanProperty import BooleanProperty
from vital_ai_vitalsigns.model.properties.DateTimeProperty import DateTimeProperty
from vital_ai_vitalsigns.model.properties.DoubleProperty import DoubleProperty
from vital_ai_vitalsigns.model.properties.FloatProperty import FloatProperty
from vital_ai_vitalsigns.model.properties.GeoLocationProperty import GeoLocationProperty
from vital_ai_vitalsigns.model.properties.IntegerProperty import IntegerProperty
from vital_ai_vitalsigns.model.properties.LongProperty import LongProperty
from vital_ai_vitalsigns.model.properties.OtherProperty import OtherProperty
from vital_ai_vitalsigns.model.properties.StringProperty import StringProperty
from vital_ai_vitalsigns.model.properties.TruthProperty import TruthProperty
from vital_ai_vitalsigns.model.properties.URIProperty import URIProperty
from com_vitalai_haley_domain.model.HaleyResponseMessage import HaleyResponseMessage


class HaleyResultMessage(HaleyResponseMessage):
    _allowed_properties = [
        {'uri': 'http://vital.ai/ontology/haley#hasHaleyLimit', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasHaleyOffset', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasHaleyTotalResults', 'prop_class': IntegerProperty}, 
        {'uri': 'http://vital.ai/ontology/haley#hasResultSequence', 'prop_class': IntegerProperty}, 
    ]

    @classmethod
    def get_allowed_properties(cls):
        return super().get_allowed_properties() + HaleyResultMessage._allowed_properties

